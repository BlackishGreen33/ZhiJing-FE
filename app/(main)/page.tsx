import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

export default function Home() {
	return (
		<div>
			<p className="text-3xl font-bold text-indigo-500">Hello MuxiBar</p>
			<Button variant="destructive">Click me</Button>
			<ModeToggle />
		</div>
	);
}
