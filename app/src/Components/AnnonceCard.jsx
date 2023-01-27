import {
    Image,
    Text,
    Heading,
    Box,
    Tag,
} from '@chakra-ui/react'

export default function ({infos}) {
    return <>
        <Box userSelect="none" display="flex" flexDirection="column" gap={2} minW={200} maxW={350} textAlign="left" >
            <Image
                src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
            />
            <Heading fontSize="xl" color="#212529" cursor="pointer">{infos.titre}</Heading>
            <Text fontSize="md" color="#6C757D" cursor="pointer">{infos.auteur.nom} {infos.auteur.prenom}</Text>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap={2}>
                {infos.tarifPromotion===null ?  <Box display="flex" alignItems="center" justifyContent="flex-start" gap={1}>
                    <Text fontSize="xl" color="#212529" fontWeight={700}>{infos.tarif}</Text>
                    <Text color="#495057">Da/h</Text>
                </Box>:<>
                <Box display="flex" alignItems="center" justifyContent="flex-start" gap={1}>
                    <Text fontSize="xl" color="#212529" fontWeight={700}>{infos.tarifPromotion}</Text>
                    <Text color="#495057">Da/h</Text>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="flex-start" gap={1}>
                    <Text textDecoration="line-through" fontSize="lg" color="#6C757D" >{infos.tarif}</Text>
                    <Text textDecoration="line-through" fontSize="md" color="#6C757D">Da/h</Text>
                </Box>
                </>}

            </Box>
            <Text fontSize="md" color="#6C757D">{infos.lieuFormation.latitiude}</Text>
            <Box display="flex" alignItems="center" justifyContent="flex-start" gap={2} >
                {infos.modalité==="Presental" ?
                <Tag bg='brand.100' color='#fff' borderRadius={0} maxW="fit-content" cursor="pointer" fontWeight={700}>{infos.modalité}</Tag>
            :
               <Tag bg="brand.300" color='#fff' borderRadius={0} maxW="fit-content" cursor="pointer">{infos.modalité}</Tag>
            
            }
                <Tag bg="brand.200" color='#000' borderRadius={0} maxW="fit-content" cursor="pointer" >{infos.niveau}</Tag>
                {/* <Tag bg="brand.300" color='#fff' borderRadius={0} maxW="fit-content" cursor="pointer">Primaire - 1</Tag> */}
            </Box>
        </Box>
    </>
}