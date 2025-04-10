import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';
import {
  ILocation,
  IPlaceSearchResponseType,
} from '@src/types/location/placeSearchResponseType';
import { usePlaceSaveMutation } from '@src/state/mutations/location/usePlaceSaveMutation';
import { IGetUserInfoResponse } from '@src/types/users/getUserInfoResponseType';
import { IPlaceSaveRequestType } from '@src/types/location/placeSaveRequestType';

interface ILocationForm {
  myLocations: IPlaceSaveRequestType[];
  friendLocations: IPlaceSaveRequestType[];
}

interface UseLocationInitializationProps {
  placeSearchData: IPlaceSearchResponseType | undefined;
  userInfo: IGetUserInfoResponse | undefined;
  resetLocation: UseFormReset<ILocationForm>;
  setSavedLocations: (locations: ILocation[]) => void;
}

export function useLocationInitialization({
  placeSearchData,
  userInfo,
  resetLocation,
  setSavedLocations,
}: UseLocationInitializationProps) {
  const { mutate: placeSaveMutation } = usePlaceSaveMutation();

  useEffect(() => {
    if (placeSearchData?.data) {
      if (
        placeSearchData.data.myLocations.length === 0 &&
        userInfo?.data?.existAddress &&
        userInfo?.data?.addressLatitude &&
        userInfo?.data?.addressLongitude
      ) {
        const defaultLocation = {
          siDo: userInfo.data.siDo,
          siGunGu: userInfo.data.siGunGu,
          roadNameAddress: userInfo.data.roadNameAddress,
          addressLat: userInfo.data.addressLatitude,
          addressLong: userInfo.data.addressLongitude,
        };

        placeSaveMutation(
          { placeSavePayload: defaultLocation },
          {
            onSuccess: (data) => {
              setSavedLocations([
                { ...defaultLocation, placeId: data.data.placeId },
              ]);
              resetLocation({
                myLocations: [defaultLocation],
                friendLocations: placeSearchData.data.friendLocations.map(
                  (place: ILocation) => ({
                    siDo: place.siDo,
                    siGunGu: place.siGunGu,
                    roadNameAddress: place.roadNameAddress,
                    addressLat: place.addressLat,
                    addressLong: place.addressLong,
                  }),
                ),
              });
            },
          },
        );
      } else if (placeSearchData.data.myLocations.length === 0) {
        resetLocation({
          myLocations: [
            {
              siDo: '',
              siGunGu: '',
              roadNameAddress: '',
              addressLat: 0,
              addressLong: 0,
            },
          ],
          friendLocations: placeSearchData.data.friendLocations.map(
            (place: ILocation) => ({
              siDo: place.siDo,
              siGunGu: place.siGunGu,
              roadNameAddress: place.roadNameAddress,
              addressLat: place.addressLat,
              addressLong: place.addressLong,
            }),
          ),
        });
      } else {
        setSavedLocations(placeSearchData.data.myLocations);
        resetLocation({
          myLocations: placeSearchData.data.myLocations.map(
            (place: ILocation) => ({
              siDo: place.siDo,
              siGunGu: place.siGunGu,
              roadNameAddress: place.roadNameAddress,
              addressLat: place.addressLat,
              addressLong: place.addressLong,
            }),
          ),
          friendLocations: placeSearchData.data.friendLocations.map(
            (place: ILocation) => ({
              siDo: place.siDo,
              siGunGu: place.siGunGu,
              roadNameAddress: place.roadNameAddress,
              addressLat: place.addressLat,
              addressLong: place.addressLong,
            }),
          ),
        });
      }
    }
  }, [
    placeSearchData?.data,
    userInfo?.data,
    resetLocation,
    placeSaveMutation,
    setSavedLocations,
  ]);
}
