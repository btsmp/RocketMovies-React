import { FiLock, FiMail, FiUser, FiCamera, FiArrowLeft } from "react-icons/fi"
import { getCroppedImg } from "../services/canvasUtils";
import { TextButton } from "../components/TextButton";
import { Button } from "../components/Button";
import { useState, useCallback } from "react";
import { Input } from "../components/Input";
import { useAuth } from "../hooks/auth";


import nullAatar from '../assets/avatarprev.jpg';
import Cropper from "react-easy-crop";

export function Profile() {
  const { user, updateProfile } = useAuth()
  const imgSrc = user.avatar ? user.avatar : nullAatar


  const [ name, setName ] = useState(user.name)
  const [ email, setEmail ] = useState(user.email)
  const [ passwordOld, setPasswordOld ] = useState()
  const [ passwordNew, setpasswordNew ] = useState()
  const [ avatar, setAvatar ] = useState(imgSrc)
  const [ avatarFile, setAvatarFile ] = useState()

  const [ imageSrc, setImageSrc ] = useState(null)
  const [ croppedAreaPixels, setCroppedAreaPixels ] = useState(null)
  const [ crop, setCrop ] = useState({ x: 0, y: 0 })
  const [ zoom, setZoom ] = useState(1)



  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, [])

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels)


      const imagePreview = URL.createObjectURL(croppedImage)

      setAvatarFile(new File([ croppedImage ], `Avatar de ${ name }.png`, {
        type: croppedImage.type,
      }))

      setAvatar(imagePreview)
      closeModal()
    } catch (e) {
      console.error(e)
    }
  }, [ imageSrc, croppedAreaPixels ])

  function readFile(file) {
    return new Promise((resolve) => {
      const reader = new FileReader()
      reader.addEventListener('load', () => resolve(reader.result), false)
      reader.readAsDataURL(file)
    })
  }

  async function handleUpdateProfile(e) {
    e.preventDefault()

    const updated = {
      name,
      email,
      password: passwordNew,
      oldPassword: passwordOld,
      avatar,
    }
    const userUpdated = Object.assign(user, updated)

    await updateProfile({ user: userUpdated, avatarFile })
  }

  function closeModal() {
    setImageSrc(null)
  }

  async function handleChangeAvatar(e) {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[ 0 ]
      const imageDataUrl = await readFile(file)
      setImageSrc(imageDataUrl)
    }
  }

  return (
    <div>
      {
        imageSrc ? (
          <div className="absolute h-screen w-screen grid place-items-center z-10 bg-[#1c1b1eb7]">
            <div className="h-4/6 w-[80vw]  rounded-xl bg-[#0E0D0E] flex flex-col gap-4 items-center justify-center ">
              <div className="h-5/6 w-full relative">
                <Cropper
                  image={imageSrc}
                  crop={crop}
                  zoom={zoom}
                  aspect={1 / 1}
                  cropShape='round'
                  onCropChange={setCrop}
                  onCropComplete={onCropComplete}
                  onZoomChange={setZoom}
                />
              </div>
              <div>

                <label
                  htmlFor="zoom"
                  className="block mb-2 text-gray-300"
                >
                  Zoom
                </label>
                <input
                  id="zoom"
                  value={zoom}
                  min={1}
                  max={3}
                  step={0.1}
                  onChange={(e) => setZoom(e.target.value)}
                  type="range"
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
                />

              </div>
              <div className="w-full flex gap-8 h-12 bg-[#0E0D0E] p-2">
                <Button title="Cancelar" onClick={closeModal} />
                <Button title="Usar assim" onClick={showCroppedImage} />
              </div>
            </div>
          </div>
        ) : <></>
      }


      <div className="bg-[#FF859B]/5 pl-36 py-12 ">
        <TextButton
          to="/"
          title="Voltar"
          icon={FiArrowLeft}
        />
      </div>

      <div className="w-80 mx-auto flex flex-col items-center -m-24 ">
        <div className="mb-10 relative">
          <img
            src={avatar}
            alt={`Imagem de ${ user.name }`}
            width={180}
            height={180}
            className="rounded-full border-white border-[1px]"
          />
          <label htmlFor="avatar" className="absolute bg-[#FF859B] hover:brightness-125 border-white border-[1px] p-4 rounded-full right-0 bottom-1">
            <input
              type="file"
              accept=".jpg, .jpeg, .png"
              id="avatar"
              className="hidden"
              onChange={handleChangeAvatar}
            />
            <FiCamera />
          </label>
        </div>

        <form className="flex flex-col gap-3">
          <div className="flex flex-col gap-2">
            <Input
              icon={FiUser}
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
            <Input
              icon={FiMail}
              type="text"
              readOnly={user.google_user}
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          {
            user.google_user ? <></> :
              <div className="flex flex-col gap-2">
                <Input
                  icon={FiLock}
                  type="password"
                  placeholder="Senha atual"
                  onChange={e => setPasswordOld(e.target.value)}
                />
                <Input
                  icon={FiLock}
                  type="password"
                  placeholder="Nova senha"
                  onChange={e => setpasswordNew(e.target.value)}
                />
              </div>
          }

          <div className="h-11">
            <Button title="Salvar" onClick={handleUpdateProfile} />
          </div>
        </form>
      </div >
    </div >
  )
}