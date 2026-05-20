import { createFileRoute } from "@tanstack/react-router";
import LoginPage from "@/components/login/LoginPage";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sondhi Travels B2B Portal — Sign In" },
      {
        name: "description",
        content:
          "Sign in to the Sondhi Travels B2B Portal. A premium booking and operations dashboard built for travel agents.",
      },
    ],
  }),
});

function Index() {
  return <LoginPage />;
}
