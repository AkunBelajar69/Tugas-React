import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  Pressable,
  FlatList,
  ScrollView,
  Modal,
  ActivityIndicator,
  SectionList,
  TouchableOpacity,
  Switch,
  useColorScheme
} from "react-native";

export default function Component() {
//   const UserCard = ({ name, status, imageUrl }) => (
//     <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 15 }}>
//       <Image 
//         source={{ uri: imageUrl }} 
//         style={{ width: 50, height: 50, marginRight: 15, borderRadius: 25 }} 
//       />
//       <View>
//         <Text style={{ fontWeight: "bold", fontSize: 16 }}>{name}</Text>
//         <Text style={{ color: "gray" }}>{status}</Text>
//       </View>
//     </View>
//   );

//   return (
//     <View style={{ width: 320, padding: 20 }}>
//       <UserCard
//         name="Budi Santoso"
//         status="Aktif"
//         imageUrl="https://randomuser.me/api/portraits/men/32.jpg"
//       />
//       <UserCard
//         name="Siti Aisyah"
//         status="Alumni"
//         imageUrl="https://randomuser.me/api/portraits/women/44.jpg"
//       />
//     </View>
//   );
//   SOAL COMPONENT NO 1


//   const LoginForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");

//     return (
//       <View>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={setEmail}
//           style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 10, borderRadius: 5 }}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={setPassword}
//           secureTextEntry
//           style={{ borderWidth: 1, borderColor: "#ccc", padding: 10, marginBottom: 15, borderRadius: 5 }}
//         />
//         <Pressable
//           style={({ pressed }) => [
//             { backgroundColor: "black", padding: 12, alignItems: "center", borderRadius: 5 },
//             { opacity: pressed ? 0.5 : 1 },
//           ]}
//           onPress={() => console.log("Login:", email)}
//         >
//           <Text style={{ color: "white", fontWeight: "bold" }}>Login</Text>
//         </Pressable>
//       </View>
//     );
//   };

//   return (
//     <View style={{ width: 320, padding: 20 }}>
//       <LoginForm />
//     </View>
//   );
//   SOAL COMPONENT NO 2


//   const products = Array.from({ length: 50 }, (_, i) => ({
//     id: String(i + 1),
//     name: `Produk ${i + 1}`,
//   }));

//   return (
//     <View style={{ width: 320, height: 400, padding: 20 }}>
//       <FlatList
//         data={products}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <Text style={{ padding: 15, borderBottomWidth: 1, borderBottomColor: "#eee" }}>
//             {item.name}
//           </Text>
//         )}
//       />
//     </View>
//   );
//   SOAL COMPONENT NO 3


//   const categories = ["Pemrograman", "Database", "UI/UX", "Jaringan"];

//   return (
//     <View style={{ width: 320, height: 400, padding: 20 }}>
//       <View style={{ height: 50, marginBottom: 10 }}>
//         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//           {categories.map((item) => (
//             <Text key={item} style={{ marginRight: 10, padding: 10, backgroundColor: "#ddd", borderRadius: 5 }}>
//               {item}
//             </Text>
//           ))}
//         </ScrollView>
//       </View>
//       <ScrollView>
//         <Text style={{ lineHeight: 22 }}>
//           Pembelajaran pemrograman membantu siswa memahami cara membuat aplikasi.
//           Materi dapat dipelajari secara bertahap melalui teori, praktik, dan berbagai contoh project.
//           Dengan antarmuka yang terstruktur, proses belajar jadi lebih efektif.
//         </Text>
//       </ScrollView>
//     </View>
//   );
//   SOAL COMPONENT NO 4


//   const MyButton = ({ title, onPress, variant }) => {
//     let bgColor = "gray";
//     if (variant === "primary") bgColor = "blue";
//     if (variant === "success") bgColor = "green";
//     if (variant === "danger") bgColor = "red";

//     return (
//       <Pressable
//         onPress={onPress}
//         style={{ backgroundColor: bgColor, padding: 12, alignItems: "center", borderRadius: 5, marginVertical: 5 }}
//       >
//         <Text style={{ color: "white", fontWeight: "bold" }}>{title}</Text>
//       </Pressable>
//     );
//   };

//   return (
//     <View style={{ width: 320, padding: 20 }}>
//       <MyButton title="Primary" variant="primary" onPress={() => console.log("Primary")} />
//       <MyButton title="Success" variant="success" onPress={() => console.log("Success")} />
//       <MyButton title="Danger" variant="danger" onPress={() => console.log("Danger")} />
//     </View>
//   );
//   SOAL COMPONENT NO 5


//   const [modalVisible, setModalVisible] = useState(false);

//   return (
//     <View style={{ width: 320, padding: 20 }}>
//       <Pressable onPress={() => setModalVisible(true)} style={{ backgroundColor: "black", padding: 12, alignItems: "center", borderRadius: 5 }}>
//         <Text style={{ color: "white" }}>Fetch Data</Text>
//       </Pressable>
//       <Modal visible={modalVisible} transparent animationType="fade">
//         <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)" }}>
//           <View style={{ backgroundColor: "white", padding: 30, alignItems: "center", borderRadius: 10 }}>
//             <ActivityIndicator size="large" color="blue" />
//             <Text style={{ marginTop: 15, marginBottom: 20 }}>Memuat data...</Text>
//             <Pressable onPress={() => setModalVisible(false)} style={{ backgroundColor: "#ddd", padding: 10, borderRadius: 5 }}>
//               <Text>Tutup</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
//   SOAL COMPONENT NO 6


//   const CustomImage = ({ imageUrl }) => {
//     const [loading, setLoading] = useState(false);

//     return (
//       <View style={{ width: 300, height: 200, justifyContent: "center", alignItems: "center", backgroundColor: "#f0f0f0" }}>
//         {loading && <ActivityIndicator size="large" style={{ position: "absolute" }} />}
//         <Image
//           source={{ uri: imageUrl }}
//           style={{ width: 300, height: 200 }}
//           onLoadStart={() => setLoading(true)}
//           onLoadEnd={() => setLoading(false)}
//         />
//       </View>
//     );
//   };

//   return (
//     <View style={{ width: 320, padding: 20, alignItems: "center" }}>
//       <CustomImage imageUrl="https://picsum.photos/300/200" />
//     </View>
//   );
//   SOAL COMPONENT NO 7


//   const sections = [
//     {
//       title: "Mata Pelajaran Kejuruan",
//       data: ["Pemrograman", "Basis Data", "UI/UX Design"],
//     },
//     {
//       title: "Mata Pelajaran Umum",
//       data: ["Matematika", "Bahasa Indonesia", "Bahasa Inggris"],
//     },
//   ];

//   return (
//     <View style={{ width: 320, height: 400, padding: 20 }}>
//       <SectionList
//         sections={sections}
//         keyExtractor={(item, index) => item + index}
//         renderSectionHeader={({ section }) => (
//           <Text style={{ fontWeight: "bold", backgroundColor: "#e2e8f0", padding: 10, marginTop: 15 }}>
//             {section.title}
//           </Text>
//         )}
//         renderItem={({ item }) => (
//           <Text style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: "#cbd5e1" }}>
//             {item}
//           </Text>
//         )}
//       />
//     </View>
//   );
//   SOAL COMPONENT NO 8


//   const colorScheme = useColorScheme(); // Baca tema HP (dark/light)
//   const [selectedMode, setSelectedMode] = useState("Light Mode");
//   const modes = ["Light Mode", "Dark Mode", "System Default"];

//   // Logika penentuan warna background layar
//   let layarBg = "#FFFFFF"; // Default Light Mode (Putih)
  
//   if (selectedMode === "Dark Mode") {
//     layarBg = "#000000"; // Dark Mode (Hitam)
//   } else if (selectedMode === "System Default") {
//     layarBg = colorScheme === "dark" ? "#000000" : "#FFFFFF"; // Ngikutin sistem HP
//   }

//   return (
//     <View style={{ width: 320, padding: 20, backgroundColor: layarBg, borderRadius: 10, borderWidth: 1, borderColor: "#ccc" }}>
//       <Text style={{ color: selectedMode === "Dark Mode" || (selectedMode === "System Default" && colorScheme === "dark") ? "#FFFFFF" : "#000000", fontSize: 18, fontWeight: "bold", marginBottom: 15 }}>
//         Pengaturan Tema
//       </Text>
//       {modes.map((mode) => (
//         <TouchableOpacity
//           key={mode}
//           onPress={() => setSelectedMode(mode)}
//           style={{
//             padding: 15,
//             marginVertical: 5,
//             backgroundColor: selectedMode === mode ? "#3b82f6" : "#f1f5f9",
//             borderRadius: 8,
//           }}
//         >
//           <Text style={{ 
//             fontWeight: selectedMode === mode ? "bold" : "normal",
//             color: selectedMode === mode ? "white" : "black" // Text tombol jadi putih kalo lagi aktif
//           }}>
//             {mode}
//           </Text>
//         </TouchableOpacity>
//       ))}
//     </View>
//   );
//   SOAL COMPONENT NO 9


//   const [agreed, setAgreed] = useState(false);

//   return (
//     <View style={{ width: 320, padding: 20 }}>
//       <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 20 }}>
//         <Switch value={agreed} onValueChange={setAgreed} />
//         <Text style={{ marginLeft: 10, flexShrink: 1 }}>
//           Saya menyetujui Syarat & Ketentuan yang berlaku.
//         </Text>
//       </View>
//       <Pressable
//         disabled={!agreed}
//         onPress={() => console.log("Berhasil Submit!")}
//         style={{
//           backgroundColor: "blue",
//           padding: 12,
//           alignItems: "center",
//           borderRadius: 5,
//           opacity: agreed ? 1 : 0.4,
//         }}
//       >
//         <Text style={{ color: "white", fontWeight: "bold" }}>Submit</Text>
//       </Pressable>
//     </View>
//   );
//   SOAL COMPONENT NO 10
}