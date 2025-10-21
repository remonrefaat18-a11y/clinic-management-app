import { useState } from "react";
import DoctorCard from "../../components/doctorCard";

export default function AddMeasurement() {
  const [activeTab, setActiveTab] = useState("نبذة");

  const doctorData = {
    name: "د. أحمد السيد",
    specialty: "قلب وأوعية دموية",
    img : "/images/doctor1.jpg",
    rating: 4.8,
    reviews: 127,
    location: "المعادي، القاهرة",
    yearsOfExperience: 15,
    email: "doctor@hospital.com",
    phone: "01234567890",
    fees: 300,
  };

  return (
    <div className=" font-[sans-serif]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm flex items-center gap-3 text-right p-3 mb-6">
        <button className="px-4 py-2 rounded-xl hover:bg-gray-100 transition" onClick={() => window.history.back()}>
          ← العودة
        </button>
        <h3 className="text-2xl font-semibold text-gray-800">
          {doctorData.name}
        </h3>
      </nav>

      {/* Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto p-4">
        {/* Left Section */}
        <div className="lg:col-span-2">
          {/* Doctor Card */}
          <div className="bg-white p-6 rounded-2xl shadow-md">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex-shrink-0 ml-4"> {/* ml-4 for spacing from the next block (Arabic is right-to-left) */}
                <img
                  src={doctorData.img}
                  alt="Doctor"
                  className="w-30 h-30 rounded-full"
                />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">{doctorData.name}</h2>
                <p className="text-blue-600 font-medium">{doctorData.specialty}</p>
                <p className="text-gray-600 mt-2">{doctorData.location}</p>
                <p className="text-gray-600">سنوات الخبرة: {doctorData.yearsOfExperience}</p>
                <p className="text-gray-600">📞 {doctorData.phone}</p>
                <p className="text-gray-600">✉️ {doctorData.email}</p>
              </div>
              <div className="mt-4 md:mt-0 text-center md:text-left">
                <p className="text-2xl font-semibold text-gray-800">{doctorData.fees} جنيه</p>
                <p className="text-gray-500 text-sm">كشف</p>
              </div>
            </div>
          </div>

          {/* Tabs */}
         <div className="flex bg-gray-100 rounded-3xl mt-6 text-gray-700 font-small overflow-hidden">
            <button
              className={`flex-1 py-3 ${
                activeTab === "نبذة"
                  ? "bg-white border-b-2 border-blue-600"
                  : "hover:bg-white"
              }`}
              onClick={() => setActiveTab("نبذة")}
            >
              نبذة
            </button>

            <button

              className={`flex-1 py-3 ${
                activeTab === "العنوان"
                  ? "bg-white border-b-2 border-blue-600"
                  : "hover:bg-white"
              }`}
              onClick={() => setActiveTab("العنوان")}
            >
              العنوان
            </button>
          </div>

          {/* Tab Content */}
          <div className="bg-white p-6 rounded-2xl shadow-md mt-4">
            {activeTab === "نبذة" && (
              <div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">
                  نبذة عن الطبيب
                </h3>

                {/* التعليم والمؤهلات */}
                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    🎓 التعليم والمؤهلات
                  </h4>
                  <p className="text-gray-600 mb-1">
                    جامعة القاهرة - كلية الطب
                  </p>
                  <p className="text-gray-600">دكتوراه في قلب وأوعية دموية</p>
                </div>

                {/* الخبرة */}
                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    🩺 الخبرة
                  </h4>
                  <p className="text-gray-600">
                    15 سنة خبرة في مجال قلب وأوعية دموية
                  </p>
                  <p className="text-gray-600">
                    عضو الجمعية المصرية لأطباء القلب
                  </p>
                </div>
                </div>
            )}

            {activeTab === "العنوان" && (
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-800">
                  العنوان ومعلومات الاتصال
                </h3>

                {/* العنوان */}
                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    🏥 العنوان
                  </h4>
                  <p className="text-gray-600">المعادي، القاهرة</p>
                  <p className="text-gray-600">
                    شارع التسعين الشمالي، مول سيتي سنتر، الدور الثالث
                  </p>
                </div>

                {/* أوقات العمل */}
                <div className="mb-5">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    🕒 أوقات العمل
                  </h4>
                  <p className="text-gray-600">
                    السبت - الخميس: 9:00 ص - 6:00 م
                  </p>
                  <p className="text-gray-600">
                    الجمعة: 2:00 م - 8:00 م
                  </p>
                </div>

                {/* معلومات الاتصال */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-700 mb-2">
                    📞 معلومات الاتصال
                  </h4>
                  <p className="text-gray-600">📱 01234567890</p>
                  <p className="text-gray-600">✉️ doctor@hospital.com</p>
                  <p className="text-blue-600 hover:underline cursor-pointer">
                    🌐 www.doctor-website.com
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Section */}
        <div className="bg-white p-6 rounded-2xl shadow-md h-fit">
          <h3 className="text-xl text-center font-semibold mb-4 text-gray-800">
            حجز موعد سريع
          </h3>

          <p className="text-gray-600 mb-3">:المواعيد المتاحة اليوم</p>
          <div className="flex flex-wrap gap-3 mb-5">
            <button className="border rounded-xl px-4 py-2 hover:bg-blue-50">
              10:00 ص
            </button>
            <button className="border rounded-xl px-4 py-2 hover:bg-blue-50">
              2:30 م
            </button>
            <button className="border rounded-xl px-4 py-2 hover:bg-blue-50">
              5:00 م
            </button>
          </div>

          <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition flex items-center justify-center gap-2">
            <span>📅</span> حجز موعد
          </button>

          {/* الأسعار */}
          <div className="mt-6 border-t pt-4 text-gray-700">
            <h4 className="text-lg font-semibold mb-2">الأسعار</h4>
            <div className="flex justify-between mb-1">
              <span>كشف أول</span>
              <span>300 جنيه</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>كشف متابعة</span>
              <span>250 جنيه</span>
            </div>
            <div className="flex justify-between">
              <span>استشارة هاتفية</span>
              <span>150 جنيه</span>
            </div>
          </div>

          {/* التأمين */}
          <div className="mt-6 border-t pt-4 text-gray-700">
            <h4 className="text-lg font-semibold mb-2">التأمين المقبول</h4>
            <ul className="space-y-1">
              <li> 🟢تأمين الشركة المصرية</li>
              <li> 🟢تأمين المهديب</li>
              <li> 🟢تأمين بوبا العربية</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}