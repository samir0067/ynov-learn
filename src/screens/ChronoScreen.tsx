import View from "react-native/types_generated/Libraries/Components/View/View";

export default function ChronoScreen() {
    
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <View style={styles.screen}>
            <Text style={styles.chrono}>{seconds} Mon chrono</Text>

            <View>
                <Text style={styles.values}>{seconds}</Text>
                <View style={styles.circle}>
                    <Text style={styles.value}>{seconds}</Text>
                    <Text style={styles.unit}>secondes</Text>
                </View>
            </View>

            <Text style={styles.hint}>Démarrage automatique...</Text>
        </View>
    );
}