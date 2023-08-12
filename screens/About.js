// import React from "react";
// import { View, Text, Button, StyleSheet } from 'react-native';

// const About = ({ navigation }) => {
//     return (
//         <View style={styles.container}>
//             <Text style={styles.text}>The Ausome Sidekick app was created as a tool for parents and teachers
//                 to record ABC charts and, in turn, better understand the function of children's behaviors. </Text>
//             <Text style={styles.heading}>Attribution</Text>
//             <Text style={styles.text}>App Logo:</Text>
//             <Text style={styles.text}>Designed by catalyststuff / Freepik.com</Text>
//             <Text style={styles.text}>Avatar icons:</Text>
//             <Text style={styles.text}>Designed by 千图网 / Pngtree.com</Text>
//         </View>
//     );
// }

// export default About;

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: 'rgb(235, 243, 250)',
//     },

//     text: {
//         margin: 15,
//         fontSize: 18
//     },

//     heading: {
//         fontWeight: 'bold',
//         fontSize: 25,
//         color: '#445E92',
//         margin: 10,
//         borderWidth: 1,
//         borderRadius: 10,
//         padding: 10
//     },
// });

import React from "react";
import { View, Button } from "react-native";
import * as XLSX from 'xlsx';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

const About = () => {
    const generateExcel = () => {
        let sample_data_to_export = [{ id: '1', name: 'First User' }, { id: '2', name: 'Second User' }];

        let wb = XLSX.utils.book_new();
        let ws = XLSX.utils.json_to_sheet(sample_data_to_export)
        XLSX.utils.book_append_sheet(wb, ws, "Users")
        const base64 = XLSX.write(wb, { type: 'base64', bookType: "xlsx" });
        const fileName = FileSystem.documentDirectory + "MyExcel.xlsx";
        FileSystem.writeAsStringAsync(fileName, base64, {
            encoding: FileSystem.EncodingType.Base64
        }).then(() => {
            Sharing.shareAsync(fileName);
        });
    }


    return (<View>
        <Button title="Generate Excel" onPress={generateExcel}></Button>
    </View>

    );
}

export default About;