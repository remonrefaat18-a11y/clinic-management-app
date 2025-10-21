export default function DoctorCard(props) {
  return (
    <div className="border border-gray-300 rounded-2xl p-4 flex flex-col items-center text-center"> 
            <img
              src= {props.img}
              alt="Doctor"
                className="w-24 h-24 rounded-full mb-4"
            />
          <h3 className="text-lg font-semibold text-gray-800"> {props.name} </h3>
            <p className="text-gray-600">{props.specialty}</p>
            <p className="text-gray-600">{props.location}</p>
            <p className="text-blue-600 font-semibold mt-2"> {props.price} جنية</p>
            <button className="mt-4 bg-blue-600 font-semibold text-white px-4 py-2 rounded-xl hover:bg-blue-800 transition">
                 عرض الملف الشخصي وحجز موعد
            </button>
    </div>


  );}