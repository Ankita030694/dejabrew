"use client";

import React, { useState, useEffect } from "react";
import { Playfair_Display, Montserrat } from "next/font/google";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";
import { useRouter } from "next/navigation";

// Font setup to match page.tsx
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

interface Outlet {
  id: string;
  outlet: string;
  timeSlots: string[];
}

interface FormData {
  name: string;
  email: string;
  phone: string;
  persons: string;
  date: string;
  timeSlot: string;
  timing: string;
  countryCode: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  persons?: string;
  date?: string;
  timeSlot?: string;
  timing?: string;
  outlet?: string;
}

interface ReservationFormProps {
  onClose?: () => void;
  isInline?: boolean;
}

const ReservationForm: React.FC<ReservationFormProps> = ({ onClose, isInline = false }) => {
  const router = useRouter();
  const [outlets, setOutlets] = useState<Outlet[]>([
    {
      id: "1",
      outlet: "Deja Brew - South Delhi",
      timeSlots: [
        "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
        "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM",
        "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM",
        "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM",
        "11:00 PM", "11:30 PM", "12:00 AM", "12:30 AM", "1:00 AM"
      ]
    }
  ]);
  
  const [timeSlots, setTimeSlots] = useState<string[]>([]);
  const [selectedOutlet, setSelectedOutlet] = useState<Outlet | null>(outlets[0]);
  const [loading, setLoading] = useState(false);
  const today = new Date().toISOString().split("T")[0];

  // Consolidated form state
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    persons: "",
    date: today,
    timeSlot: "",
    timing: "",
    countryCode: "+91 (India)",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [showTimeSlots, setShowTimeSlots] = useState(false);

  useEffect(() => {
    if (selectedOutlet) {
      const sortedTimeSlots = selectedOutlet.timeSlots.sort((a, b) => {
        return parseTime(a) - parseTime(b);
      });
      setTimeSlots(sortedTimeSlots);
    }
  }, [selectedOutlet]);

  // Reset time slot when date changes, especially for March 14th
  useEffect(() => {
    if (formData.date && formData.timing) {
      handleInputChange("timeSlot", "");
      filterTimeSlots(formData.timing, true);
    }
  }, [formData.date]);

  // Helper function to validate phone number
  const isValidPhoneNumber = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, "");
    return digits.length >= 6 && digits.length <= 15;
  };

  // Converts a time like "8:00 PM" to 24-hour format
  const parseTime = (time: string): number => {
    const [hourMinute, period] = time.split(" ");
    const [hour, minute] = hourMinute.split(":").map(Number);
    if (period === "PM" && hour !== 12) {
      return hour + 12;
    } else if (period === "AM" && hour === 12) {
      return 0;
    }
    return hour;
  };

  // Check if the selected date is March 14th, 2025
  const isMarch14th = (dateString: string): boolean => {
    const date = new Date(dateString);
    return date.getFullYear() === 2025 && date.getMonth() === 2 && date.getDate() === 14;
  };

  // Filter time slots based on type (lunch or dinner) and check for March 14th
  const filterTimeSlots = (slotType: string, keepTimingSelection = false) => {
    if (!selectedOutlet) return;
    
    let filteredSlots = selectedOutlet.timeSlots;

    // Special case for March 14th, 2025 - only show slots after 6 PM
    if (isMarch14th(formData.date)) {
      filteredSlots = filteredSlots.filter(slot => {
        const hour = parseTime(slot);
        return hour >= 18; // Only show slots from 6 PM onwards
      });
      
      // If it's March 14th and user selected lunch, automatically switch to dinner
      if (slotType === "lunch") {
        slotType = "dinner";
      }
    } else {
      // Normal filtering for other days
      filteredSlots = filteredSlots.filter(slot => {
        const hour = parseTime(slot);
        return slotType === "lunch"
          ? hour >= 11 && hour < 18
          : hour >= 18 && hour < 24;
      });
    }

    // Sort the time slots
    filteredSlots.sort((a, b) => parseTime(a) - parseTime(b));
    
    setTimeSlots(filteredSlots);
    
    // Only update the timing if we're not keeping the current selection
    if (!keepTimingSelection) {
      handleInputChange("timing", slotType);
    }
    
    // Reset selected time slot when filtering changes available options
    handleInputChange("timeSlot", "");
    
    // Show time slots after selecting timing
    setShowTimeSlots(true);
  };

  const handleCounter = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10) || 0;
    if (value >= 1 && value <= 150) {
      handleInputChange("persons", value.toString());
    } else if (value < 1) {
      handleInputChange("persons", "1");
    } else if (value > 150) {
      handleInputChange("persons", "150");
    }
  };

  const increment = () => {
    const currentPersons = parseInt(formData.persons) || 0;
    if (currentPersons < 150) {
      handleInputChange("persons", (currentPersons + 1).toString());
    }
  };

  const decrement = () => {
    const currentPersons = parseInt(formData.persons) || 0;
    if (currentPersons > 1) {
      handleInputChange("persons", (currentPersons - 1).toString());
    }
  };

  // Validate entire form
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!isValidPhoneNumber(formData.phone)) {
      newErrors.phone = "Please Enter A Valid Phone Number";
    }

    if (!selectedOutlet) {
      newErrors.outlet = "Please select an outlet";
    }

    if (!formData.date) {
      newErrors.date = "Please select a date";
    }

    if (!formData.timing) {
      newErrors.timing = "Please select lunch or dinner time";
    }

    if (!formData.timeSlot) {
      newErrors.timeSlot = "Please select a time slot";
    }

    if (!formData.persons || formData.persons === "" || parseInt(formData.persons) <= 0) {
      newErrors.persons = "Please enter the number of people";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Validate phone on blur
  const validatePhone = () => {
    if (!formData.phone.trim()) {
      setErrors((prev) => ({ ...prev, phone: "Phone number is required" }));
    } else if (!isValidPhoneNumber(formData.phone)) {
      setErrors((prev) => ({
        ...prev,
        phone: "Please Enter A Valid Phone Number",
      }));
    } else {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setLoading(true);

    try {
      const reservation = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        persons: parseInt(formData.persons),
        outlet: {
          title: selectedOutlet?.outlet || "",
          id: selectedOutlet?.id || "",
        },
        timeSlot: formData.timeSlot,
        date: formData.date,
        timing: formData.timing,
        createdAt: new Date(),
        countryCode: formData.countryCode,
      };

      // Save to Firebase 'form' collection
      const formCollection = collection(db, "form");
      await addDoc(formCollection, reservation);
      
      // Reset form fields
      setFormData({
        name: "",
        email: "",
        phone: "",
        persons: "",
        date: today,
        timeSlot: "",
        timing: "",
        countryCode: "+91 (India)",
      });
      setShowTimeSlots(false);
      if (onClose) onClose();

      // Redirect to /thank-you page
      router.push('/thank-you');
    } catch (error) {
      console.error("Error saving reservation:", error);
      alert("An error occurred while submitting your reservation. Please try again.");
    }
    setLoading(false);
  };

  // Update formData and clear any error for the field on change
  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  // Check if a time slot has already passed for the selected date
  const isTimeSlotPassed = (dateStr: string, timeSlotStr: string): boolean => {
    const todayStr = new Date().toISOString().split("T")[0];
    
    // Future dates are never passed
    if (dateStr > todayStr) {
      return false;
    }
    // Past dates are always passed
    if (dateStr < todayStr) {
      return true;
    }
    
    const now = new Date();
    
    // Parse the slot time
    const [hourMinute, period] = timeSlotStr.split(" ");
    let [hour, minute] = hourMinute.split(":").map(Number);
    
    if (period === "PM" && hour !== 12) {
      hour += 12;
    } else if (period === "AM" && hour === 12) {
      hour = 0;
    }
    
    // Logical hours since 6 AM (business day logic)
    let slotHour = hour;
    if (slotHour < 6) {
      slotHour += 24;
    }
    const slotMinutes = slotHour * 60 + minute;
    
    let currentHour = now.getHours();
    let currentMin = now.getMinutes();
    if (currentHour < 6) {
      currentHour += 24;
    }
    const currentMinutes = currentHour * 60 + currentMin;
    
    return currentMinutes >= slotMinutes;
  };

  // Determine if we should disable the lunch button (for March 14th)
  const isLunchDisabled = isMarch14th(formData.date);

  const formContent = (
    <div className={`relative bg-gradient-to-br from-[#1A0F00]/80 to-black/80 border border-[#C8A27A]/30 rounded-2xl shadow-2xl w-full max-w-4xl backdrop-blur-sm ${isInline ? "" : "max-h-[90vh] overflow-y-auto"}`}>
      {/* Close Button */}
      {!isInline && onClose && (
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl font-bold z-10"
        >
          ×
        </button>
      )}

      <div className="p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <h2 className="text-4xl md:text-5xl font-serif text-[#C8A27A] mb-4">
              Book Your Table
            </h2>
            <p className="text-white/80 text-lg font-sans">
              Reserve your spot at Deja Brew for an unforgettable experience
            </p>
            {isMarch14th(formData.date) && (
              <div className="mt-4 p-3 bg-red-600/20 border border-red-500/50 rounded-lg">
                <p className="text-red-300 font-medium">
                  Note: On March 14th, 2025, the restaurant opens only after 6 PM.
                </p>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium font-sans">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^[a-zA-Z\s]*$/.test(value)) {
                      handleInputChange("name", value);
                    }
                  }}
                  className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent transition-all ${
                    errors.name ? "border-red-500 ring-2 ring-red-500/30" : ""
                  }`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm">{errors.name}</p>
                )}
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium font-sans">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent transition-all ${
                    errors.email ? "border-red-500 ring-2 ring-red-500/30" : ""
                  }`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone Number with Country Code */}
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium font-sans">Phone Number</label>
              <div className="flex gap-3">
                <select
                  value={formData.countryCode}
                  onChange={(e) => handleInputChange("countryCode", e.target.value)}
                  className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent transition-all"
                >
                  <option value="+91 (India)" className="bg-black">+91 India</option>
                  <option value="+1 (USA)" className="bg-black">+1 USA</option>
                  <option value="+44 (UK)" className="bg-black">+44 UK</option>
                  <option value="+61 (Australia)" className="bg-black">+61 Australia</option>
                  <option value="+33 (France)" className="bg-black">+33 France</option>
                  <option value="+49 (Germany)" className="bg-black">+49 Germany</option>
                </select>
                <input
                  type="tel"
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={(e) => {
                    const numericValue = e.target.value.replace(/[^0-9]/g, "");
                    handleInputChange("phone", numericValue);
                  }}
                  onBlur={validatePhone}
                  className={`flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 outline-none focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent transition-all ${
                    errors.phone ? "border-red-500 ring-2 ring-red-500/30" : ""
                  }`}
                />
              </div>
              {errors.phone && (
                <p className="text-red-400 text-sm">{errors.phone}</p>
              )}
            </div>

            {/* Outlet and Guests Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Outlet Selection */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium font-sans">Select Outlet</label>
                <select
                  value={selectedOutlet?.id || ""}
                  onChange={(e) => {
                    const outlet = outlets.find((o) => o.id === e.target.value);
                    setSelectedOutlet(outlet || null);
                    if (outlet) {
                      setTimeSlots(outlet.timeSlots);
                    }
                    handleInputChange("timeSlot", "");
                    handleInputChange("timing", "");
                    setShowTimeSlots(false);
                  }}
                  className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent transition-all ${
                    errors.outlet ? "border-red-500 ring-2 ring-red-500/30" : ""
                  }`}
                >
                  <option value="" className="bg-black">Select outlet</option>
                  {outlets.map((outlet) => (
                    <option key={outlet.id} value={outlet.id} className="bg-black">
                      {outlet.outlet}
                    </option>
                  ))}
                </select>
                {errors.outlet && (
                  <p className="text-red-400 text-sm">{errors.outlet}</p>
                )}
              </div>

              {/* Number of Guests */}
              <div className="space-y-2">
                <label className="text-white/90 text-sm font-medium font-sans">Number of Pax</label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={decrement}
                    className="w-10 h-12 bg-[#C8A27A] text-black rounded-lg font-bold hover:bg-[#B8927A] transition-colors"
                  >
                    -
                  </button>
                  <input
                    type="number"
                    value={formData.persons}
                    onChange={handleCounter}
                    className={`flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white text-center outline-none focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent transition-all ${
                      errors.persons ? "border-red-500 ring-2 ring-red-500/30" : ""
                    }`}
                    placeholder="Guests"
                    min="1"
                    max="150"
                  />
                  <button
                    type="button"
                    onClick={increment}
                    className="w-10 h-12 bg-[#C8A27A] text-black rounded-lg font-bold hover:bg-[#B8927A] transition-colors"
                  >
                    +
                  </button>
                </div>
                {errors.persons && (
                  <p className="text-red-400 text-sm">{errors.persons}</p>
                )}
              </div>
            </div>

            {/* Date Picker */}
            <div className="space-y-2">
              <label className="text-white/90 text-sm font-medium font-sans">Select Date</label>
              <input
                type="date"
                value={formData.date}
                min={today}
                onChange={(e) => handleInputChange("date", e.target.value)}
                className={`w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white outline-none focus:ring-2 focus:ring-[#C8A27A] focus:border-transparent transition-all ${
                  errors.date ? "border-red-500 ring-2 ring-red-500/30" : ""
                }`}
              />
              {errors.date && (
                <p className="text-red-400 text-sm">{errors.date}</p>
              )}
            </div>

            {/* Time Slot Filtering Buttons */}
            <div className="space-y-4">
              <label className="text-white/90 text-sm font-medium font-sans">Select Dining Time</label>
              <div className="flex gap-4">
                <button
                  type="button"
                  onClick={() => filterTimeSlots("lunch")}
                  disabled={isLunchDisabled}
                  className={`flex-1 py-3 px-6 rounded-lg transition-all duration-200 font-medium ${
                    formData.timing === "lunch"
                      ? "bg-[#C8A27A] text-black font-semibold"
                      : isLunchDisabled
                      ? "bg-gray-600 cursor-not-allowed opacity-50 text-white"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Lunch Time
                  {isLunchDisabled && (
                    <span className="block text-xs mt-1">Not available Mar 14</span>
                  )}
                </button>

                <button
                  type="button"
                  onClick={() => filterTimeSlots("dinner")}
                  className={`flex-1 py-3 px-6 rounded-lg transition-all duration-200 font-medium ${
                    formData.timing === "dinner"
                      ? "bg-[#C8A27A] text-black font-semibold"
                      : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                  }`}
                >
                  Dinner Time
                </button>
              </div>
              {errors.timing && (
                <p className="text-red-400 text-sm text-center">{errors.timing}</p>
              )}
            </div>

            {/* Time Slot Selection */}
            {showTimeSlots && (
              <div className="space-y-4">
                <label className="text-white/90 text-sm font-medium font-sans">Choose Time Slot</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {timeSlots.map((slot, index) => {
                    const passed = isTimeSlotPassed(formData.date, slot);
                    return (
                      <button
                        key={index}
                        type="button"
                        disabled={passed}
                        onClick={() => handleInputChange("timeSlot", slot)}
                        className={`py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                          formData.timeSlot === slot
                            ? "bg-[#C8A27A] text-black font-semibold"
                            : passed
                            ? "bg-white/5 text-white/30 cursor-not-allowed border border-white/5 opacity-40"
                            : "bg-white/10 text-white hover:bg-white/20 border border-white/20"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
                {errors.timeSlot && (
                  <p className="text-red-400 text-sm">{errors.timeSlot}</p>
                )}
              </div>
            )}

            {/* Submit Button */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#C8A27A] text-black font-bold py-4 rounded-lg hover:bg-[#B8927A] transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-lg"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                    Processing...
                  </span>
                ) : (
                  "Reserve Table"
                )}
              </button>
            </div>
          </form>
      </div>
    </div>
  );

  if (isInline) {
    return (
      <div className={`w-full flex justify-center ${playfair.variable} ${montserrat.variable}`}>
        {formContent}
      </div>
    );
  }

  return (
    <div className={`fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 ${playfair.variable} ${montserrat.variable}`} style={{
      backgroundImage: 'url(/reservation.png)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}>
      {formContent}
    </div>
  );
};

export default ReservationForm;
