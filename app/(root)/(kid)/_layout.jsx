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
      <Stack.Screen
        name="kideducation"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="books"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="listkids"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="offlinelistkids"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="offlinealllistkids"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="addkid"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="pdfview"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default KidLayout;
