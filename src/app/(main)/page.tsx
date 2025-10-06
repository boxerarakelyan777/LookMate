import dynamic from "next/dynamic";
import LoadingSpinner from "../../components/LoadingSpinner";

const HeroSection = dynamic(() => import("../../components/Hero"),       { ssr: false, loading: () => <LoadingSpinner/> });
const Features    = dynamic(() => import("../../components/FeaturesClient"), { ssr: false, loading: () => <LoadingSpinner/> });
const ComingSoon  = dynamic(() => import("../../components/ComingSoon"), { ssr: false, loading: () => <LoadingSpinner/> });
const ContactForm = dynamic(() => import("../../components/Contact"),    { ssr: false, loading: () => <LoadingSpinner/> });

export default function Home() {
  return (
    <>
      <HeroSection />
      <Features />
      <ComingSoon />
      <ContactForm />
    </>
  );
}
