/************************** Import library/fungsi ****************************/
// mount firebase sekali saja dalam aplikasi, tetapi di dalam folder ./src
import {useState, useEffect} from 'react';
import firebase from '../firestore/firebase';

/************************ Deklarasi objek/variabel ***************************/
var firestoreDbRef = firebase.firestore();

/************************ Deklarasi kelas/komponen ***************************/

function useFetchFirestore(docName){
    const [data,setData] = useState({firestoreData:{}});

    // ComponentDidMount
    useEffect(()=>{
        const updateData = () => {
            firestoreDbRef.collection('Signal_Injector').doc(docName).get().then((doc) => {
                setData(data => ({ ...data, firestoreData:doc.data()}));
                // PENTING : HARUS ARROW FUNC, AGAR data TDK JADI DEPENDENCY
                // DAN MENGHINDARI PEMBUATAN INTERVAL BERULANG KALI
            });
            //console.log("data updated");
        };

        const updateTimer = setInterval(updateData,5000);
        //console.log("timer created");

        // ComponentWillUnmount
        return()=>{
            //silakan unmount di sini
            clearInterval(updateTimer);
        }
    },[docName]);
    /* empty dependency array pada 2nd arg useEffect
     * = effect bersikap seperticomponentDidMount
     */

    /* 
    // Jika ada kebutuhan buat menonton data tetapi tidak lewat interval, 
    // lakukan seperti ini.
    // ComponentDidUpdate karena destructurized variabel "data" dari useState
    useEffect(()=>{
        // do asdf
    },[data]);
    */

    return [data];
}

export default useFetchFirestore;