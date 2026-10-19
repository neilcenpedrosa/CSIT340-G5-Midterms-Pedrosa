import FeatureCard from "./components/FeatureCard";
export default function Features() {
  return (
    <main className="grid grid-cols-3 gap-8 px-20"> 
        <FeatureCard
          badge="Free"
          title="Open source"
          description="Read the code and use it in any project."
        />
        <FeatureCard
          badge="Small"
          title="Lightweight"
          description="Import only the components the page uses."
        />
        <FeatureCard
          badge="Simple"
          title="Easy to learn"
          description="Every component takes a few plain props."
        />
      </main>
    );  
}
    