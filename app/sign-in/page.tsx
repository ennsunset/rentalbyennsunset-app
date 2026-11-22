import { PageIntro, SiteFrame } from "../components/SiteFrame";
import { SignInForm } from "./SignInForm";

export const metadata = {
  title: "Sign in | RentByEnn",
  description: "Sign-in page preview for RentByEnn.",
};

export default function SignInPage() {
  return (
    <SiteFrame>
      <section className="content-section narrow-content">
        <PageIntro
          eyebrow="WELCOME BACK"
          title="Good to see you."
          description="Sign-in is presented as a frontend demo."
        />
        <SignInForm />
      </section>
    </SiteFrame>
  );
}
