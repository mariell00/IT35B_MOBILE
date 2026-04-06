import { IonButton, IonContent, IonHeader, IonIcon, IonItem, IonMenu, IonMenuToggle, IonPage, IonRouterOutlet, IonSplitPane, IonTitle, IonToolbar, } from "@ionic/react"
import { homeOutline, logOutOutline } from "ionicons/icons"
import { Redirect, Route } from "react-router-dom"
import Home from "./Home"

const Menu: React.FC = () => {
    const path = [
        { name: 'Home', url: '/app/home', icon: homeOutline }

    ];
    return (
        <IonPage>
            <IonMenu contentId="main" type="overlay">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <IonContent>

                    {path.map((item, index) => (
                        <IonMenuToggle key={index}>
                            <IonItem routerLink={item.url} routerDirection="forward">
                                <IonIcon icon={item.icon}
                                    slot="start"></IonIcon>
                                {item.name}
                            </IonItem>
                        </IonMenuToggle>
                    ))}

                    <IonButton routerLink="/" routerDirection="back" expand="full">
                        <IonIcon icon={logOutOutline} slot="start"></IonIcon>
                        Logout
                    </IonButton>
                </IonContent>
            </IonMenu>
            <IonRouterOutlet id="main">
                <Route exact path="/app/home" component={Home} />
                <Route exact path="/app">
                    <Redirect to="/app/home" />
                </Route>
            </IonRouterOutlet>
        </IonPage>

    );
};

export default Menu;