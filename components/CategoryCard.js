import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({ imgUrl, title}) => {
  return (
    <TouchableOpacity style={{position: "relative", marginRight: 15}}>
      <Image 
        source={{
          url: imgUrl,
        }}
        style={styles.categoryImage}
      />
      <Text style={styles.categoryText}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
  categoryImage: {
    height: 80,
    width: 80,
    borderRadius: 10
  },
  categoryText: {
    position: "absolute", 
    bottom: 8, 
    left: 8, 
    color: "white", 
    fontWeight: 'bold', 
    // backgroundColor: 'lightgray'
  }
})