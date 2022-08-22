import { VideoSettingsButtonStyled, VideoSettingsSpan } from '../Styles/VideoStyled.styled'

export const VideoSettingsButton = ({ name }) => {
  return (
    <VideoSettingsButtonStyled>
      <VideoSettingsSpan></VideoSettingsSpan>
      <VideoSettingsSpan></VideoSettingsSpan>
      <VideoSettingsSpan></VideoSettingsSpan>
      <VideoSettingsSpan></VideoSettingsSpan>
      {name}
    </VideoSettingsButtonStyled>
  )
}
