document.addEventListener('DOMContentLoaded', function() {
    const reservationForm = document.getElementById('reservationForm');
    const confirmationMsg = document.getElementById('confirmation-msg');
    const clientNameSpan = document.getElementById('client-name');

    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault(); // منع الصفحة من إعادة التحميل
            
            // الحصول على البيانات
            const name = document.getElementById('name').value;
            const serviceSelect = document.getElementById('service-type');
            const service = serviceSelect.options[serviceSelect.selectedIndex].text;
            
            // إظهار رسالة التأكيد
            if (clientNameSpan) {
                clientNameSpan.innerText = name;
            }
            
            if (confirmationMsg) {
                confirmationMsg.style.display = 'block';
            }
            
            // مسح النموذج
            this.reset();
            
            // تنبيه بسيط في الكونسول
            console.log(`تم حجز جلسة ${service} باسم ${name}`);
        });
    }
});
