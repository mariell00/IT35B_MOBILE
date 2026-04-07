import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';

const Template: React.FC = () => {
    return (
        <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonButtons>
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonTitle>About</IonTitle>
                    </IonToolbar>
                </IonHeader>
              <IonContent fullscreen>
                <h1>about</h1>
              </IonContent>
        </IonPage>

    );
}

export default Template;
