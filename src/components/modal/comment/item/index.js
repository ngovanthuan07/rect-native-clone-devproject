import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import { getMe } from '../../../../services/user'
import { generalStyles } from '../../../../styles'
import styles from './styles'

const CommentItem = ({ item }) => {
    const [user, setUser] = useState(null)

    useEffect(() => {
        (async () => {
            setUser(await getMe())
        })();
    }, [])

    console.log(user)
    return (
        <View style={styles.container}>
            <Image style={generalStyles.avatarSmall} source={{ uri: user?.avatar }} />

            <View style={styles.containerText}>
                <Text style={styles.displayName}>{user?.name}</Text>
                <Text>{item?.content}</Text>
            </View>
        </View>
    )
}

export default CommentItem
