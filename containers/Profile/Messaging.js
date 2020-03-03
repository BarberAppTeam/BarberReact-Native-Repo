import React, { Component } from 'react';
import { View, SafeAreaView } from "react-native";
import { StreamChat } from "stream-chat";
import {
    Chat,
    Channel,
    MessageList,
    MessageInput,
} from "stream-chat-expo";

const chatClient = new StreamChat('8ppbvrfwwkkx');
const userToken =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiZmxhdC1mbG93ZXItMiJ9.sT8Y8Ft1mI1tMSRKkmGakdZNRlRhv0rfaeNUoQqBtHY';

const user = {
    id: 'flat-flower-2',
    name: 'Flat flower',
    image:
        'https://stepupandlive.files.wordpress.com/2014/09/3d-animated-frog-image.jpg',
};

chatClient.setUser(user, userToken);

class ChannelScreen extends Component {
    render() {
        const channel = chatClient.channel("messaging", "flat-flower-2");
        channel.watch();

        return (
            <SafeAreaView>
                <Chat client={chatClient}>
                    <Channel channel={channel}>
                        <View style={{ display: "flex", height: "100%" }}>
                            <MessageList />
                            <MessageInput />
                        </View>
                    </Channel>
                </Chat>
            </SafeAreaView>
        );
    }
}

export default class Messaging extends React.Component {
    render() {
        return <ChannelScreen />;
    }
}





/*
export default class Messaging extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            data: [],
            error: null,
        };

        this.arrayholder = [];
    }

    componentDidMount() {
        this.makeRemoteRequest();
    }

    makeRemoteRequest = () => {
        const url = `https://randomuser.me/api/?&results=20`;
        this.setState({ loading: true });

        fetch(url)
            .then(res => res.json())
            .then(res => {
                this.setState({
                    data: res.results,
                    error: res.error || null,
                    loading: false,
                });
                this.arrayholder = res.results;
            })
            .catch(error => {
                this.setState({ error, loading: false });
            });
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 1,
                    width: '86%',
                    backgroundColor: '#CED0CE',
                    marginLeft: '14%',
                }}
            />
        );
    };

    searchFilterFunction = text => {
        this.setState({
            value: text,
        });

        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.name.title.toUpperCase()} ${item.name.first.toUpperCase()} ${item.name.last.toUpperCase()}`;
            const textData = text.toUpperCase();

            return itemData.indexOf(textData) > -1;
        });
        this.setState({
            data: newData,
        });
    };


    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <ActivityIndicator />
                </View>
            );
        }
        return (
            <View style={{ marginTop: 40 }}>
                <SearchBar
                    placeholder="Type Here..."
                    lightTheme
                    round
                    onChangeText={text => this.searchFilterFunction(text)}
                    autoCorrect={false}
                    value={this.state.value}
                    style={styles.SearchBar}
                    name="ios-locate" size={45}
                    showLoading={true}
                />

                <FlatList
                    data={this.state.data}
                    renderItem={({ item }) => (
                        <ListItem
                            leftAvatar={{ source: { uri: item.picture.thumbnail } }}
                            title={`${item.name.first} ${item.name.last}`}
                            subtitle={item.email}
                        />
                    )}
                    keyExtractor={item => item.email}
                    ItemSeparatorComponent={this.renderSeparator}
                    ListHeaderComponent={this.renderHeader}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    SearchBar: {
        marginTop: 10
    },
});*/