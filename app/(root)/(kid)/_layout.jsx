import { Stack } from "expo-router";

const KidLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="kid"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default KidLayout;
