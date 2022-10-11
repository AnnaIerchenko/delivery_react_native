import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { MapPinIcon, StarIcon } from 'react-native-heroicons/outline'


const RestaurantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat
}) => {
  return (
    <TouchableOpacity style={{backgroundColor: 'white', marginRight: 12, shadowRadius: 5}}>
      <Image 
        source={{url: urlFor(imgUrl).url()}} 
        style={{height: 220, width: 320, borderRadius: 20}}
      />
      <View style={{paddingHorizontal: 15, paddingBottom: 20}}>
        <Text style={{fontWeight: "bold", fontSize: 20, paddingTop: 8}}>
          {title}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center', margin: 8}}>
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text style={{fontSize: 16, color: "gray"}}>
            <Text style={{color: 'green', opacity: 0.5}}>
              {rating} </Text>- {genre}
          </Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center', marginHorizontal: 8}}>
          <MapPinIcon color="gray" opacity={0.4} size={22} />
          <Text style={{fontSize: 16, color: "gray"}}>Nearby - {address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default RestaurantCard

const styles = StyleSheet.create({})