import { Stack } from "expo-router";

const MainLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="mainscreen"
        options={{
          headerShown: false,
        }}
      />
      {/* <Stack.Screen
        name="(women)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(kid)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(doctor)"
        options={{
          headerShown: false,
        }}
      /> */}
    </Stack>
  );
};

export default MainLayout;
