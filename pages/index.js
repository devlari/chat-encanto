import appConfig from '../config.json' 
import React from 'react';
import { useRouter } from 'next/router'
import { Box, Button, Text, TextField, Image } from '@skynexui/components'
import react from 'react';

function Titulo(props) {
  const Tag = props.tag || 'h1';
  
  return (
    <>
        <Tag>{props.children}</Tag>
        <style jsx>{`
              ${Tag} {
                  color: ${appConfig.theme.colors.neutrals['000']};
                  font-size: 24px;
                  font-weight: 600;
              }
              `}</style>
      </>
    );
}

export default function PaginaInicial() {
    const [username, setUsername] = React.useState('')
    const [logo, setLogo] = react.useState('https://i.pinimg.com/564x/42/66/c4/4266c41d0c6f72d31a77a69fd69c8af5.jpg')
    const roteamento = useRouter();
  
    return (
      <>
        <Box
          styleSheet={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: appConfig.theme.colors.neutrals[200],
            backgroundImage: 'url(https://s2.glbimg.com/mHTbsGfQz878eO5ewQj5_mUzAqA=/top/e.glbimg.com/og/ed/f/original/2021/10/25/encanto-online-use-teaser1_039.00_0288.jpg)',
            backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
          }}
        >
          <Box
            styleSheet={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: {
                xs: 'column',
                sm: 'row',
              },
              width: '100%', maxWidth: '700px',
              borderRadius: '5px', padding: '32px', margin: '16px',
              boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
          >
            {/* Formulário */}
            <Box
              as="form"
              onSubmit={
                function(e){
                  e.preventDefault()
                  roteamento.push(`/chat?username=${username}`)
                }
              }
              styleSheet={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
              }}
            >
              <Titulo tag="h2">Bem vindo à família Madrigal!</Titulo>
              <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[200] }}>
                {appConfig.name}
              </Text>
  
              <TextField
                fullWidth
                textFieldColors={{
                  neutral: {
                    textColor: appConfig.theme.colors.neutrals[600],
                    mainColor: appConfig.theme.colors.neutrals[900],
                    mainColorHighlight: appConfig.theme.colors.primary[100],
                    backgroundColor: appConfig.theme.colors.neutrals[200],
                  }
                }}
                type="text" value={username} 
                onChange={function (event) {
                    const valor = event.target.value
                    setUsername(valor)
                    setLogo('https://i.pinimg.com/564x/42/66/c4/4266c41d0c6f72d31a77a69fd69c8af5.jpg')
                    if(valor.length >= 4){
                      setLogo(`https://github.com/${valor}.png`)
                    }
                  }}
              />
              <Button
                type='submit'
                label='Entrar'
                fullWidth
                buttonColors={{
                  contrastColor: appConfig.theme.colors.neutrals["000"],
                  mainColor: appConfig.theme.colors.primary[500],
                  mainColorLight: appConfig.theme.colors.primary[400],
                  mainColorStrong: appConfig.theme.colors.primary[600],
                }}
              />
            </Box>
            {/* Formulário */}
  
  
            {/* Photo Area */}
            <Box
              styleSheet={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                maxWidth: '200px',
                padding: '16px',
                backgroundColor: "rgba(200, 200, 200, 0.6)",
                border: '1px solid',
                borderColor: appConfig.theme.colors.neutrals[999],
                borderRadius: '10px',
                flex: 1,
                minHeight: '240px',
              }}
            >
              <Image
                styleSheet={{
                  borderRadius: '50%',
                  marginBottom: '16px',
                }}
                src={logo}
              />
              <Text
                variant="body4"
                styleSheet={{
                  color: appConfig.theme.colors.neutrals[100],
                  backgroundColor: appConfig.theme.colors.primary[600],
                  padding: '3px 10px',
                  borderRadius: '1000px'
                }}
              >
                {username}
              </Text>
            </Box>
            {/* Photo Area */}
          </Box>
        </Box>
      </>
    );
}