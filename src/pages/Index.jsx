import React from "react";
import { Box, Container, Flex, Heading, IconButton, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaChartBar, FaClipboardList, FaWarehouse, FaUser, FaTruck, FaFileInvoice } from "react-icons/fa";

const DashboardCard = ({ icon, title, description }) => (
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p={5} shadow="md">
    <Flex align="center">
      <IconButton aria-label={title} icon={icon} size="lg" mr={4} />
      <VStack align="start">
        <Heading size="md">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </Flex>
  </Box>
);

const Index = () => {
  return (
    <Container maxW="container.xl" py={10}>
      <Heading mb={6}>Dashboard</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        <DashboardCard icon={<FaChartBar />} title="Material Status" description="Overview of material status and levels." />
        <DashboardCard icon={<FaClipboardList />} title="Procurement Status" description="Current status of procurement activities." />
        <DashboardCard icon={<FaWarehouse />} title="Inventory Levels" description="View and manage inventory levels." />
        <DashboardCard icon={<FaUser />} title="User Management" description="Manage users and their roles." />
        <DashboardCard icon={<FaTruck />} title="Vendor Management" description="Manage vendor information and activities." />
        <DashboardCard icon={<FaFileInvoice />} title="Invoice Verification" description="Verify and manage invoices." />
      </SimpleGrid>
    </Container>
  );
};

export default Index;
