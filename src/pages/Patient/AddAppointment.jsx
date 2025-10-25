import { useState, useEffect } from "react";
import { doc, getDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { auth, db } from "../../firebase/firebaseConfig";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Alert } from "@mui/material";
import { useAuth } from "../../context/AuthContext";

export default function DoctorAppointment() {
  const { id } = useParams();
  const [doctorData, setDoctorData] = useState(null);
  const [activeTab, setActiveTab] = useState("نبذة");
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [selectedService, setSelectedService] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const { currentUser, userData } = useAuth();

  // Fetch doctor data by ID
  useEffect(() => {
    const fetchDoctor = async () => {
      if (!id) return;
      try {
        const docRef = doc(db, "users", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setDoctorData(docSnap.data());
        } else {
          console.log("No such doctor found!");
        }
      } catch (err) {
        console.error("Error fetching doctor:", err);
      }
    };

    fetchDoctor();
  }, [id]);

  // Booking handler with Firestore write
  const handleBooking = async () => {
    if (!selectedDate || !selectedTime) {
      setConfirmation("اختيار التاريخ والوقت أولاً");
      return;
    }
    if (!selectedService) {
      setConfirmation("يرجى اختيار نوع الكشف أولاً");
      return;
    }

    try {
      setLoading(true);
      const formattedDate = selectedDate.toLocaleDateString("ar-EG");

      // Add appointment document to Firestore
      await addDoc(collection(db, "appointments"), {
        userName: userData?.name || "مستخدم غير معروف",
        userEmail: currentUser?.email || "غير متوفر",
        userPhone: userData?.phone || "غير متوفر",
        userId: currentUser?.uid || null,
        doctorName: doctorData?.name || "غير محدد",
        doctorId: id,
        serviceType: selectedService,
        date: formattedDate,
        time: selectedTime,
        createdAt: serverTimestamp(),
      });

      setConfirmation(`تم حجز ${selectedService} يوم ${formattedDate} الساعة ${selectedTime}`);
      setSelectedDate(null);
      setSelectedTime(null);
      setSelectedService("");
    } catch (error) {
      console.error("Error adding appointment:", error);
      setConfirmation("خطأ أثناء الحجز. حاول مرة أخرى.");
    } finally {
      setLoading(false);
    }
  };

  if (!doctorData) {
    return <div className="text-center py-20 text-gray-600">جاري تحميل بيانات الطبيب...</div>;
  }

  return (
    <div className="font-[sans-serif]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm flex items-center gap-3 text-right p-3 mb-6">
        <button
          className="px-4 py-2 rounded-xl hover:bg-gray-100 transition"
          onClick={() => window.history.back()}
        >
          ← العودة
        </button>
        <h3 className="text-2xl font-semibold text-gray-800">د. {doctorData.name}</h3>
      </nav>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Doctor Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex-shrink-0 ml-4">
                <img src={doctorData.img} alt="Doctor" className="w-30 h-30 rounded-full" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">د. {doctorData.name}</h2>
                <p className="text-blue-600 font-medium">{doctorData.specialization}</p>
                <p className="text-gray-600 mt-2">{doctorData.location}</p>
                <p className="text-gray-600">📞 {doctorData.phone}</p>
                <p className="text-gray-600">✉️ {doctorData.email}</p>
              </div>
              <div className="mt-4 md:mt-0 text-center md:text-left">
                <p className="text-2xl font-semibold text-gray-800">{doctorData.price} جنيه</p>
                <p className="text-gray-500 text-sm">كشف</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="flex bg-gray-100 rounded-3xl mt-6 text-gray-700 font-small overflow-hidden">
            <button
              className={`flex-1 py-3 ${activeTab === "نبذة" ? "bg-white border-b-2 border-blue-600" : "hover:bg-white"}`}
              onClick={() => setActiveTab("نبذة")}
            >
              نبذة
            </button>

            <button
              className={`flex-1 py-3 ${activeTab === "العنوان" ? "bg-white border-b-2 border-blue-600" : "hover:bg-white"}`}
              onClick={() => setActiveTab("العنوان")}
            >
              العنوان
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 rounded-2xl shadow-md mt-4">
            {activeTab === "نبذة" && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">نبذة عن الطبيب</h3>

                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">🎓 التعليم والمؤهلات</h4>
                  <p className="text-gray-600 mb-1">جامعة القاهرة - كلية الطب</p>
                  <p className="text-gray-600">دكتوراه في قلب وأوعية دموية</p>
                </div>

                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">🩺 الخبرة</h4>
                  <p className="text-gray-600">15 سنة خبرة في مجال قلب وأوعية دموية</p>
                  <p className="text-gray-600">عضو الجمعية المصرية لأطباء القلب</p>
                </div>
              </div>
            )}

            {activeTab === "العنوان" && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">العنوان ومعلومات الاتصال</h3>

                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">🏥 العنوان</h4>
                  <p className="text-gray-600">المعادي، القاهرة</p>
                  <p className="text-gray-600">شارع التسعين الشمالي، مول سيتي سنتر، الدور الثالث</p>
                </div>

                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">🕒 أوقات العمل</h4>
                  <p className="text-gray-600">السبت - الخميس: 9:00 ص - 6:00 م</p>
                  <p className="text-gray-600">الجمعة: 2:00 م - 8:00 م</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">📞 معلومات الاتصال</h4>
                  <p className="text-gray-600">📱 01234567890</p>
                  <p className="text-gray-600">✉️ doctor@hospital.com</p>
                  <p className="text-blue-600 hover:underline cursor-pointer">🌐 www.doctor-website.com</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
          <h3 className="text-xl text-center font-semibold mb-4 text-gray-800">حجز موعد سريع</h3>

          {/* Date Picker */}
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="اختر التاريخ"
              value={selectedDate}
              onChange={(newValue) => setSelectedDate(newValue)}
              slotProps={{
                textField: { fullWidth: true, variant: "outlined", margin: "normal" },
              }}
            />
          </LocalizationProvider>

          {/* Times */}
          <p className="text-gray-600 mb-3 text-left">:المواعيد المتاحة اليوم</p>
          <div className="flex flex-wrap gap-3 mb-6 justify-start">
            {["10:00 ص", "2:30 م", "5:00 م"].map((time) => (
              <button
                key={time}
                onClick={() => setSelectedTime(time)}
                className={`border rounded-xl px-5 py-2 transition-all duration-200 text-sm md:text-base ${
                  selectedTime === time
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "hover:bg-blue-50 text-gray-700"
                }`}
              >
                {time}
              </button>
            ))}
          </div>

          {/* الخدمات */}
          <div className="mt-6 pt-4 text-gray-700">
            <h4 className="text-lg font-semibold mb-2">الخدمات</h4>
            {[
              { label: "كشف أول", price: 300 },
              { label: "كشف متابعة", price: 250 },
              { label: "استشارة هاتفية", price: 150 },
            ].map((option) => (
              <label
                key={option.label}
                className={`flex justify-between items-center border rounded-xl p-2 mb-2 cursor-pointer transition ${
                  selectedService === option.label
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:bg-gray-50"
                }`}
              >
                <span className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="service"
                    value={option.label}
                    checked={selectedService === option.label}
                    onChange={() => setSelectedService(option.label)}
                    className="accent-blue-600"
                  />
                  {option.label}
                </span>
                <span className="font-medium text-gray-800">{option.price} جنيه</span>
              </label>
            ))}
          </div>

          {/* Booking Button */}
          <button
            onClick={handleBooking}
            disabled={loading}
            className={`w-full py-3 rounded-xl transition flex items-center justify-center gap-2 text-base font-medium ${
              loading
                ? "bg-gray-400 cursor-not-allowed text-white"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            <span>📅</span> {loading ? "جارٍ الحجز..." : "حجز موعد"}
          </button>

          {/* Confirmation Message */}
          {confirmation && (
            <Alert
              severity={
                confirmation.startsWith("تم")
                  ? "success"
                  : confirmation.startsWith("خطأ")
                  ? "error"
                  : "warning"
              }
              sx={{ mt: 3, textAlign: "center", direction: "rtl" }}
            >
              {confirmation}
            </Alert>
          )}

          {/* التأمين */}
          <div className="mt-6 border-t pt-4 text-gray-700">
            <h4 className="text-lg font-semibold mb-2">التأمين المقبول</h4>
            <ul className="space-y-1">
              <li>🟢 تأمين الشركة المصرية</li>
              <li>🟢 تأمين المهديب</li>
              <li>🟢 تأمين بوبا العربية</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
