import { Button } from "../commom-components/Button/Button";
import { Card } from "../commom-components/Card/Card";
import { Logo } from "../commom-components/logo/logo";
import {Retangulo} from '../commom-components/Retangulo/Retangulo';
import {Text} from '../commom-components/Text/Text'

export function Dashboard () {
	return (
    <div>

    <Retangulo>
        <Logo>IMPACT PLAY</Logo>

        <div style={{ marginTop: '100px' }}>
        <Text> Dashboard
        </Text>
        <Text> Equipes
        </Text>
        <Text> Categorias
        </Text>
        <Text> Bonificações
        </Text>
        <Text> Configurações
        </Text>

        </div>

    <Button>Registrar ação
    </Button>
    </Retangulo>

    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Card></Card>

    </div>





    );
}