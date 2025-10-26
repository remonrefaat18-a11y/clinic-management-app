import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Tabs,
  Tab,
  Grid,
  Button,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";



function CustomTabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ mt: 2 }}>{children}</Box>}
    </div>
  );
}

function Register() {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "patient",
    specialization: "",
    experience: "",
    education: "",
    location: "",
    about: "",
    price:"",
    birthDate:"",
    gender:"",
    emergencyNumber:"",
  });

    const [loading, setLoading] = useState(false);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("كلمة المرور غير متطابقة");
      return;
    }
    setLoading(true);

    try {
      const role = value === 0 ? "patient" : "doctor";

    const {
        email,
        password,
        confirmPassword: _confirmPassword, // لا نحتاجه للحفظ
        role: _r, // نتجاهل نسخة role الموجودة في state لو كانت
        ...rest
      } = formData;

      // ممكن ترغب في حفظ كل rest، لكن تأكد من تنظيف القيم الفارغة إذا أردت
      const extraData = { ...rest };
      // حذف confirmPassword لو لسه موجود ضمن rest (تفادياً)
      delete extraData.confirmPassword;

      await signup(email, password, role, extraData);

      if (role === "doctor") {
        navigate("/doctor/profile");
      } else {
        navigate("/patient/profile");
      }
    } catch (error) {
      console.error("Registration failed:", error.message);
      alert("حدث خطأ أثناء التسجيل: " + error.message);
    }finally {
      setLoading(false);
    }
  };




  return (
    <>
      {/* الهيدر */}
      <Box
        sx={{
          backgroundColor: "white",
          minHeight: "10vh",
          borderBottom: "2px solid #ddd",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            textAlign: "right",
            pr: { xs: 4, md: 20 },
            pt: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", md: "flex-end" },
            gap: 1,
          }}
        >
          <FavoriteBorderIcon sx={{ fontSize: 30, color: "blue" }} />
          صحتي
        </Typography>
      </Box>

      {/* الجسم */}
      <Box
        sx={{
          backgroundColor: "#f0f9ff",
          minHeight: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden", // يمنع أي Scroll
          px: { xs: 1, sm: 2 },
          py: { xs: 3, md: 5 },
        }}
      >
        <Container
          maxWidth="sm"
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* الصندوق الرئيسي */}
          <Box
            sx={{
              width: "100%",
              maxWidth: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              overflow: "hidden",
            }}
          >
            <Paper
              elevation={4}
              sx={{
                p: { xs: 3, sm: 5 },
                width: "100%",
                borderRadius: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 2,
                boxSizing: "border-box",
                overflow: "hidden",
              }}
            >
              <Typography
                variant="h4"
                align="center"
                sx={{ fontSize: { xs: "1.6rem", md: "2rem" } }}
              >
                إنشاء حساب جديد
              </Typography>

              <Typography
                variant="subtitle1"
                align="center"
                sx={{
                  mb: 2,
                  fontSize: { xs: "0.95rem", md: "1rem" },
                  color: "text.secondary",
                }}
              >
                انضم إلى منصة صحتي واحصل على رعاية صحية متطورة
              </Typography>

              {/* التبويبات */}
              <Box
                sx={{
                  borderBottom: 1,
                  borderColor: "divider",
                  width: "100%",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="tabs"
                  centered
                  variant="fullWidth"
                >
                  <Tab label="مريض" />
                  <Tab label="طبيب" />
                </Tabs>
              </Box>

              {/* تبويب المريض */}
              <CustomTabPanel value={value} index={0}>
                <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", mt: 2 }}>
                  <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                    {[
                      { name: "name", label: "الاسم الكامل", type: "text", placeholder: "اكتب اسمك بالكامل" },
                      { name: "email", label: "البريد الإلكتروني", type: "email", placeholder: "example@email.com" },
                      { name: "phone", label: "رقم الهاتف", type: "tel", placeholder: "0123456789" },
                      { name: "birthDate", label: "تاريخ الميلاد", type: "date" },
                      {
                        name: "gender",
                        label: "النوع",
                        type: "select",
                        options: [
                          { value: "", text: "اختر النوع" },
                          { value: "male", text: "ذكر" },
                          { value: "female", text: "أنثى" },
                        ],
                      },
                      { name: "emergencyNumber", label: "رقم الطوارئ", type: "tel", placeholder: "رقم للطوارئ" },
                      { name: "password", label: "كلمة المرور", type: "password", placeholder: "********" },
                      { name: "confirmPassword", label: "تأكيد كلمة المرور", type: "password", placeholder: "********" },
                    ].map((field, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <label
                            style={{
                              fontWeight: "bold",
                              marginBottom: "6px",
                            }}
                          >
                            {field.label}
                          </label>
                          {field.type === "select" ? (
                            <select
                              name={field.name}
                              value={formData[field.name] || ""}
                              onChange={handleInputChange}
                              style={{
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            >
                              {field.options.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                  {opt.text}
                                </option>
                              ))}
                            </select>
                          ) : (
                            <input
                              name={field.name}
                              type={field.type}
                              placeholder={field.placeholder || ""}
                              value={formData[field.name] || ""}
                              onChange={handleInputChange}
                              style={{
                                padding: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "8px",
                                fontSize: "16px",
                                width: "100%",
                              }}
                            />
                          )}
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Button type="submit" variant="contained" fullWidth disabled={loading} sx={{ mt: 4, py: 1.3, fontSize: "18px", backgroundColor: "#007bff", borderRadius: "10px" }}>
                    {loading ? "جاري التسجيل..." : "إنشاء حساب كمريض"}
                  </Button>
                </Box>
              </CustomTabPanel>

              {/* تبويب الطبيب */}
              <CustomTabPanel value={value} index={1}>
                <Box component="form" onSubmit={handleSubmit} sx={{ width: "100%", mt: 2 }}>
                  <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                    {[             
                        { name: "name", label: "الاسم الكامل", type: "text", placeholder: "اكتب اسمك بالكامل" },
                        { name: "email", label: "البريد الإلكتروني", type: "email", placeholder: "example@email.com" },
                        { name: "phone", label: "رقم الهاتف", type: "tel", placeholder: "0123456789" },
                        { name: "specialization", label: "التخصص الطبي", type: "text", placeholder: "اكتب تخصصك الطبي" },
                        { name: "password", label: "كلمة المرور", type: "password", placeholder: "*********" },
                        { name: "confirmPassword", label: "تأكيد كلمة المرور", type: "password", placeholder: "********" },
                        { name: "experience", label: "عدد سنوات الخبرة", type: "text", placeholder: "10" },
                        { name: "price", label: "سعر الكشف", type: "text", placeholder: "100" },
                        { name: "education", label: "المؤهل الدراسي", type: "text", placeholder: "جامعة القاهرة - كلية الطب" },
                        { name: "location", label: "العنوان", type: "text", placeholder: "المعادي - القاهرة" },
                        { name: "about", label: "نبذة عنك", type: "text", placeholder: "أخصائي قلب وأوعية دموية ..." },
                    ].map((field, i) => (
                      <Grid item xs={12} sm={6} key={i}>
                        <Box sx={{ display: "flex", flexDirection: "column" }}>
                          <label
                            style={{
                              fontWeight: "bold",
                              marginBottom: "6px",
                            }}
                          >
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            name={field.name}
                            value={formData[field.name] || ""}
                            onChange={handleInputChange}
                            placeholder={field.placeholder}
                            style={{
                              padding: "10px",
                              border: "1px solid #ccc",
                              borderRadius: "8px",
                              fontSize: "16px",
                              width: "100%",
                            }}
                          />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>

                  <Button type="submit" variant="contained" fullWidth disabled={loading} sx={{ mt: 4, py: 1.3, fontSize: "18px", backgroundColor: "#007bff", borderRadius: "10px" }}>
                    {loading ? "جاري التسجيل..." : "إنشاء حساب كطبيب"}
                  </Button>
                </Box>
              </CustomTabPanel>
            </Paper>
          </Box>
        </Container>
      </Box>

      {/* الرابط السفلي */}
      <Typography
        variant="h6"
        align="center"
        sx={{
          py: 3,
          fontSize: { xs: "1rem", md: "1.2rem" },
          backgroundColor: "#f0f9ff",
        }}
      >
        لديك حساب بالفعل؟{" "}
        <Link to="/login" style={{ color: "green" }}>
          تسجيل الدخول
        </Link>
      </Typography>
    </>
  );
}

export default Register;
