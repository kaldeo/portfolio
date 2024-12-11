function toggleFullScreen() {
    if (!document.fullscreenElement) {
        // Passe en mode plein écran
        document.documentElement.requestFullscreen().catch(err => {
            console.log(`Erreur lors de la demande de plein écran: ${err.message}`);
        });
    } else {
        // Quitte le mode plein écran
        if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
}
