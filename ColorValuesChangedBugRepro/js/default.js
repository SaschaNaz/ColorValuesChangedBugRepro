// Minimal template without WinJS
Windows.UI.WebUI.WebUIApplication.addEventListener("activated", ev => {
    if (ev.detail[0].kind === Windows.ApplicationModel.Activation.ActivationKind.launch) {
        initializeAccentColorReceiver();
    }
})

const uiSettings = new Windows.UI.ViewManagement.UISettings();

function initializeAccentColorReceiver() {
    showCurrentAccentColor();
    uiSettings.addEventListener("colorvalueschanged", showCurrentAccentColor);
}

function showCurrentAccentColor() {
    const color = uiSettings.getColorValue(Windows.UI.ViewManagement.UIColorType.accent)
    accentColorBox.style.backgroundColor = `rgb(${color.r}, ${color.g}, ${color.b})`;
}