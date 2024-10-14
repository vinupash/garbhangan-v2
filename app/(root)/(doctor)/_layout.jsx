import { Stack } from "expo-router";

const DoctorLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="doctor"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="doctorvisit"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="listdoctorvisit"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default DoctorLayout;
