# ColorValuesChangedBugRepro
A bug repro for Windows.UI.ViewManagement.UISettings

### Repro process

1. Deploy the app
2. Go Settings->Personalization->Colors and change accent color
3. Check if the app shows the changed one correctly
4. If not it means the event is broken, but check if tapping Windows button fixes it
5. The event is completely broken if nothing works
