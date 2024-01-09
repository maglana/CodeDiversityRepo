function loadComponent(buttonComponents: string) {
	const componentContainer = document.getElementById("componentContainer");

	// Ładowanie HTML
	fetch(`\src\components\buttonComponents`)
		.then((response) => {
			if (!response.ok) {
				throw new Error(
					`Failed to load HTML (${response.status} ${response.statusText})`
				);
			}
			return response.text();
		})
		.then((html) => {
			// Dodanie HTML do kontenera
			if (componentContainer) {
				componentContainer.innerHTML = html;

				// Ładowanie CSS
				const styleLink = document.createElement("link");
				styleLink.rel = "stylesheet";
				styleLink.href = `buttonComponents/style.css`;
				document.head.appendChild(styleLink);
			}
		})
		.catch((error) => console.error("Error loading component:", error));
}
