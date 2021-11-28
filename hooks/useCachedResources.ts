import {FontAwesome} from "@expo/vector-icons"
import * as Font from "expo-font"
import * as SplashScreen from "expo-splash-screen"
import {useState, useEffect} from "react"
import {useFonts, Montserrat_300Light} from "@expo-google-fonts/montserrat"

export default function useCachedResources() {
    const [isLoadingComplete, setLoadingComplete] = useState(false)
    const [fontsLoaded] = useFonts({Montserrat_300Light})

    // Загрузите любые ресурсы или данные, которые нам нужны, до рендеринга приложения.
    useEffect(() => {
        (async () => {
            try {
                await SplashScreen.preventAutoHideAsync()
                // Load fonts
                await Font.loadAsync({
                    ...FontAwesome.font,
                    "antoutline": require("@ant-design/icons-react-native/fonts/antoutline.ttf"),
                    "antfill": require("@ant-design/icons-react-native/fonts/antfill.ttf")
                })
            } catch (e) {
                // Мы можем захотеть предоставить эту информацию об ошибке в службу отчетов об ошибках
                console.warn(e)
            } finally {
                setLoadingComplete(true)
                await SplashScreen.hideAsync()
            }
        })()
    }, [])

    return isLoadingComplete && fontsLoaded
}
