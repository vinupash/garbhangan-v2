import { Stack } from "expo-router";

const WomenLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="women"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="garbhasanskar"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="foodfitness"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="growthchanges"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="listwomens"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="offlinelistwomens"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="offlinealllistwomens"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="addwomen"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
};

export default WomenLayout;
