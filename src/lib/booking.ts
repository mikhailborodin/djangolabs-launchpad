// Global event for opening booking modal
export const BOOKING_EVENT = "open-booking-modal";

export const openBookingModal = () => {
  window.dispatchEvent(new CustomEvent(BOOKING_EVENT));
};
