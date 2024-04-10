<ScrollView>
            {existingLists.map(list => (
                <TouchableOpacity key={list._id} onPress={() => handleClick(list.name)}>
                    <View>
                        <Text>{list.name}</Text>
                    </View>
                </TouchableOpacity>
            ))}
        </ScrollView>