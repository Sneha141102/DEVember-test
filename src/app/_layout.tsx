import {Stack} from 'expo-router';
export default function RootLayout(){
    return (
    <Stack screenOptions={{title: 'DEVember',headerStyle: {backgroundColor:'red'},}}>
        <Stack.Screen name='index' options={{title:'DEVember'}}/>
    </Stack>    
    );
}