const canvas = document.querySelector("#canvas");
const rect = canvas.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

const raindropFx = new RaindropFX({
    canvas: canvas,
    background: "/images/VarsapuraBG.png",
});

window.onresize = () => {
    const rect = canvas.getBoundingClientRect();
    raindropFx.resize(rect.width, rect.height);
}

raindropFx.start();