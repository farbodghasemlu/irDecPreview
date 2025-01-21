$(document).ready(function () {
  // Attach click event to the "موقعیت یابی" button
  $("#locate-button").on("click", function () {
    const pincodeInput = $("#pincode-input");

    // Check if Geolocation is supported
    if (!navigator.geolocation) {
      pincodeInput.val("مرورگر شما از موقعیت‌یابی پشتیبانی نمی‌کند.");
      return;
    }

    // Get the user's location
    navigator.geolocation.getCurrentPosition(
      function (position) {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        pincodeInput.val(`عرض: ${latitude}, طول: ${longitude}`);
      },
      function (error) {
        let errorMessage = "خطا در دریافت موقعیت.";
        switch (error.code) {
          case error.PERMISSION_DENIED:
            errorMessage = "دسترسی به موقعیت رد شد.";
            break;
          case error.POSITION_UNAVAILABLE:
            errorMessage = "اطلاعات موقعیت در دسترس نیست.";
            break;
          case error.TIMEOUT:
            errorMessage = "دریافت موقعیت زمان‌بر شد.";
            break;
        }
        pincodeInput.val(errorMessage);
      }
    );
  });
});