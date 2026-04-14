
document.addEventListener("DOMContentLoaded", () => {
    const canvas = document.querySelector("#canvas");
    const loading = document.querySelector("#loading");


    const setCanvasSize = () => {
        const rect = canvas.parentElement.getBoundingClientRect();
        canvas.width = rect.width;
        canvas.height = rect.height;
    };

    setCanvasSize();


    if (typeof RaindropFX === "undefined") {
        console.error("RaindropFX bundle failed to load.");
        if (loading) loading.textContent = "Failed to load visual effects.";
        return;
    }

    let raindropFx;
    try {
        raindropFx = new RaindropFX({
            canvas: canvas,
            background: "/images/VarsapuraBG.png",
        });
    } catch (err) {
        console.error("RaindropFX failed to initialise:", err);
        if (loading) loading.textContent = "Visual effects unavailable.";
        return;
    }


    if (loading) loading.hidden = true;

    raindropFx.start();

  
    let resizeTimer;
    window.addEventListener("resize", () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            setCanvasSize();
            raindropFx.resize(canvas.width, canvas.height);
        }, 100);
    });
});
