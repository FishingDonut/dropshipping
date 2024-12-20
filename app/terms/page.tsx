import React from 'react';
import { Container, Typography, Box, Link, Divider } from '@mui/material';

const TermsOfUse = () => {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Termos de Uso
      </Typography>

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          1. Aceitação dos Termos
        </Typography>
        <Typography paragraph>
          Ao acessar e utilizar este site, o usuário concorda com os Termos e Condições aqui descritos. Caso discorde de qualquer condição, solicitamos que não utilize nossos serviços.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          2. Alteração de Termos
        </Typography>
        <Typography paragraph>
          Reservamo-nos o direito de modificar os Termos de Uso a qualquer momento, com publicação prévia no site. O uso contínuo após alterações implica aceitação.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          3. Política de Produtos e Serviços
        </Typography>
        <Typography paragraph>
          <strong>Descrição dos Produtos:</strong> Esforçamo-nos para garantir a exatidão das informações, mas não nos responsabilizamos por erros de descrição ou imagens ilustrativas.
        </Typography>
        <Typography paragraph>
          <strong>Disponibilidade:</strong> Produtos estão sujeitos à disponibilidade de estoque.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          4. Limitação de Responsabilidade
        </Typography>
        <Typography paragraph>
          Não nos responsabilizamos por danos indiretos, incidentais ou punitivos decorrentes do uso dos produtos adquiridos.
        </Typography>
        <Typography paragraph>
          Em caso de defeito de fabricação, nossa responsabilidade está limitada à troca ou reembolso, conforme o Código de Defesa do Consumidor.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          5. Direito de Arrependimento
        </Typography>
        <Typography paragraph>
          O usuário poderá exercer o direito de arrependimento em até 7 dias corridos após o recebimento do produto, conforme o artigo 49 do Código de Defesa do Consumidor.
        </Typography>
        <Typography paragraph>
          Produtos devolvidos devem estar em perfeito estado, na embalagem original, com acessórios e nota fiscal.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          6. Propriedade Intelectual
        </Typography>
        <Typography paragraph>
          Todo o conteúdo do site é de propriedade exclusiva da empresa, sendo proibida a reprodução, distribuição ou uso sem autorização prévia.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          7. Privacidade e Dados
        </Typography>
        <Typography paragraph>
          Os dados coletados são tratados conforme a nossa{' '}
          <Link href="/politica-de-privacidade" underline="hover">
            Política de Privacidade
          </Link>, respeitando a legislação vigente.
        </Typography>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={{ mt: 2 }}>
        <Typography variant="h6" gutterBottom>
          8. Foro e Lei Aplicável
        </Typography>
        <Typography paragraph>
          Estes termos são regidos pela legislação brasileira. Em caso de disputa, o foro da comarca da sede da empresa será eleito.
        </Typography>
      </Box>
    </Container>
  );
};

export default TermsOfUse;
