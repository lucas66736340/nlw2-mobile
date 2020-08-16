
import React from 'react';
import Stack from './src/routes/Stack'
import { StatusBar } from 'expo-status-bar';
import {AppLoading} from 'expo'
import {Archivo_400Regular,Archivo_700Bold,useFonts} from '@expo-google-fonts/archivo'
import {Poppins_400Regular,Poppins_600SemiBold} from '@expo-google-fonts/poppins'

export default function App() {

  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
    Poppins_400Regular,
    Poppins_600SemiBold
  })

  if(!fontsLoaded){
    //verifica se as fontes foram carregadas senao mostra a splach screnn
    return <AppLoading />  //serve para que o app continue na splach screen ate que as fontes sejam carregadas 
  }else{
    return (
      <>
        <StatusBar  
        backgroundColor="#8257e5"
         style="light"
         translucent
         
         />
        <Stack />
     </>
    );
  }
  
}


