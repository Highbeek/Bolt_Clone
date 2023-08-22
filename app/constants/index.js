import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
  SimpleLineIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";

const navLinks = [
  {
    icon: <AntDesign name="wallet" size={24} color="gray" />,
    name: "Payment",
  },
  {
    icon: <Ionicons name="md-pricetag-outline" size={24} color="gray" />,
    name: "Promotions",
    description: "Enter promo code",
    btn: "NEW",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="clock-time-eight-outline"
        size={24}
        color="gray"
      />
    ),
    name: "My Rides",
  },
  {
    icon: <SimpleLineIcons name="briefcase" size={24} color="gray" />,
    name: "Expense Your Rides",
  },
  {
    icon: <AntDesign name="questioncircleo" size={24} color="gray" />,
    name: "Support",
  },
  {
    icon: <Feather name="info" size={24} color="gray" />,
    name: "About",
  },
  {
    icon: <FontAwesome5 name="utensils" size={24} color="gray" />,
    name: "Bolt Food",
  },
];

export { navLinks };
