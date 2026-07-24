import {Flex,Input,Button,Layout} from 'antd';
import DashLayout from '@/layouts/dash-layout';
export default function CategoryList(){
    return (
        <DashLayout>
            <Flex>
                <Input placeholder={'Filter'} />
            </Flex>
        </DashLayout>
    );
}
