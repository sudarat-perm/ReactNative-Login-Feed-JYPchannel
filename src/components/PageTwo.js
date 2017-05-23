import React, { Component } from 'react';
import { Text, ListView, Alert, Image, Linking, TouchableOpacity } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Card, CardItem, Thumbnail } from 'native-base';
import {Actions} from 'react-native-router-flux';
class PageTwo extends Component {

    render() {
        return (
            <Container>
                <Header style={{
                        backgroundColor: '#078fcd'
                    }}>
                    <Left>
                        <Button transparent>
                            <Icon style={{
                        color: 'white'
                        }} name='menu' />
                        </Button>
                    </Left>
                    <Body>
                        <Title style={{
                        color: 'white'
                        }}>JYP History</Title>
                    </Body>
                    <Right>
                        <Button transparent
                        onPress={()=>Actions.contentfeed()}
                        >
                            <Text style={{
                        color: 'white'
                    }}>Back</Text>
                        </Button>
                    </Right>
                </Header>
                <Content style={{
                        backgroundColor: '#e7f8ff'
                    }}>
                    
                        <Image source={require('../Images/about.jpg')} style={{
                        width: 350,
                        height: 350,
                        alignSelf:'center',
                        marginTop:20
                    }} />
                    
                    
                </Content>
                <Footer style={{
                        backgroundColor: '#078fcd'
                    }}>
                    <FooterTab>
                        <Button full
                        onPress={()=>Actions.login()}
                        >
                            <Text style={{
                        fontWeight: 'bold',
                        color: 'white'
                    }}>Logout</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}

export default PageTwo;