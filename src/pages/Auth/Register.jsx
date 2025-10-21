<<<<<<< HEAD
export default function Register() {
  return (
    <div>
      <h1>Search Doctor Page</h1>
    </div>
  );
}
=======
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

function CustomTabPanel({ children, value, index }) {
  return (
    <div hidden={value !== index}>
      {value === index && <Box sx={{ mt: 2 }}>{children}</Box>}
    </div>
  );
}

function Register() {
  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => setValue(newValue);

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
                <Box component="form" sx={{ width: "100%", mt: 2 }}>
                  <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                    {[
                      { label: "الاسم بالكامل", type: "text", placeholder: "اكتب اسمك بالكامل" },
                      { label: "البريد الإلكتروني", type: "email", placeholder: "example@email.com" },
                      { label: "رقم الهاتف", type: "tel", placeholder: "0123456789" },
                      { label: "تاريخ الميلاد", type: "date" },
                      {
                        label: "النوع",
                        type: "select",
                        options: [
                          { value: "", text: "اختر النوع" },
                          { value: "male", text: "ذكر" },
                          { value: "female", text: "أنثى" },
                        ],
                      },
                      { label: "رقم الطوارئ", type: "tel", placeholder: "رقم للطوارئ" },
                      { label: "كلمة المرور", type: "password", placeholder: "********" },
                      { label: "تأكيد كلمة المرور", type: "password", placeholder: "********" },
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
                              type={field.type}
                              placeholder={field.placeholder || ""}
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

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 4,
                      py: 1.3,
                      fontSize: "18px",
                      backgroundColor: "#007bff",
                      borderRadius: "10px",
                    }}
                  >
                    إنشاء حساب كمريض
                  </Button>
                </Box>
              </CustomTabPanel>

              {/* تبويب الطبيب */}
              <CustomTabPanel value={value} index={1}>
                <Box component="form" sx={{ width: "100%", mt: 2 }}>
                  <Grid container spacing={{ xs: 2, sm: 3, md: 4 }}>
                    {[
                      { label: "الاسم بالكامل", type: "text", placeholder: "اكتب اسمك بالكامل" },
                      { label: "البريد الإلكتروني", type: "email", placeholder: "example@email.com" },
                      { label: "رقم الهاتف", type: "tel", placeholder: "0123456789" },
                      { label: "التخصص", type: "text", placeholder: "اكتب تخصصك الطبي" },
                      { label: "رقم التسجيل النقابي", type: "text", placeholder: "12345" },
                      { label: "كلمة المرور", type: "password", placeholder: "********" },
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

                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: 4,
                      py: 1.3,
                      fontSize: "18px",
                      backgroundColor: "#007bff",
                      borderRadius: "10px",
                    }}
                  >
                    إنشاء حساب كطبيب
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
>>>>>>> origin/login-auth
