import DoctorCard from "../../components/doctorCard";

export default function SearchDoctor() {
  return (
    <div className="min-h-screen font-[sans-serif]">
      {/* Navigation */}
      <nav className="bg-white shadow-sm flex items-center gap-3 text-right p-3 mb-6">
        <button className="px-4 py-2 rounded-xl hover:bg-gray-100 transition">
          ← العودة
        </button>
        <h3 className="text-2xl font-semibold text-gray-800">البحث عن طبيب</h3>
      </nav>

      {/* Filter Box */}
      <section className="bg-white rounded-2xl shadow-sm p-6 m-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
          🔍 البحث والتصفية
        </h2>

        <form className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-4 text-right">
          {/* Search */}
          <div>
            <label className="block text-gray-700 mb-1">البحث</label>
            <input
              type="text"
              placeholder="اسم الطبيب أو التخصص"
              className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Specialty */}
          <div>
            <label className="block text-gray-700 mb-1">التخصص</label>
            <select className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>جميع التخصصات</option>
            </select>
          </div>

          {/* Region */}
          <div>
            <label className="block text-gray-700 mb-1">المنطقة</label>
            <select className="w-full border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none">
              <option>جميع المناطق</option>
            </select>
          </div>

          {/* Price Range */}
          <div>
            <label className="block text-gray-700 mb-1">نطاق السعر</label>
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="من"
                className="w-1/2 border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="number"
                placeholder="إلى"
                className="w-1/2 border border-gray-300 rounded-xl p-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
          </div>
        </form>

        {/* Reset Button */}
        <div className="mt-6">
          <button
            type="reset"
            className="border border-gray-400 text-gray-700 px-4 py-2 rounded-xl hover:bg-gray-100 transition"
          >
            إعادة تعيين الفلاتر
          </button>
        </div>
      </section>
      {/* Doctor List */}
      <section className="bg-white rounded-2xl shadow-sm p-6 m-6">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-2 text-gray-800">
          🩺 قائمة الأطباء
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {/* Doctor Card */}
          <DoctorCard
                      name ="Dr. Jane Smith"
                      specialty="Pediatrician"
                      location="City Central Clinic"
                      price= {50}
                      />
          <DoctorCard name = 'Hello' speciality='ehat'/>
          <DoctorCard name = 'what' speciality='how'/>
        </div>
      </section>
    </div>
  );
}
