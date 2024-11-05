const btn = document.querySelector(".btn")
const coupon = document.querySelector(".coupon")

btn.addEventListener("click", (e) => {
    coupon.select()
    // กำหนดช่วงของข้อความที่เลือกเพื่อรองรับเบราว์เซอร์ที่อาจไม่สนับสนุนคำสั่ง select() อย่างเดียว
    // coupon.setSelectionRange(0, 999)
    navigator.clipboard.writeText(coupon.value)
    btn.textContent = "Copied!"
    setTimeout(() => {
        btn.textContent = "Copy"
    }, 3000)
})